import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export async function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }

      return user;
    })
    .catch(console.error);
}

export async function addNewProduct(product, image) {
  const id = uuidv4();
  const options = product.options ? product.options.split(",") : null;
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    image,
    price: parseInt(product.price),
    colors: product.colors.split(","),
    options,
  });
}

export async function getProducts() {
  return get(ref(database, "products"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch(console.error);
}

export async function addOrUpdateToCart(userId, product) {
  set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}

export async function getMyCart(userId) {
  return get(ref(database, `carts/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch(console.error);
}

export async function addNewShipping(userId, info) {
  const id = uuidv4();
  set(ref(database, `shipping/${userId}/${id}`), {
    ...info,
    id,
  });
}

export async function getMyShipping(userId) {
  return get(ref(database, `shipping/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch(console.error);
}

export async function removeShipping(userId, shippingId) {
  return remove(ref(database, `shipping/${userId}/${shippingId}`));
}
