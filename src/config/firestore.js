import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "config/firebase";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/*_____________________________*/

// Database
const database = getFirestore(app);

// Get collection
const userRef = collection(database, "users");
const blogRef = collection(database, "blogs");


// Get storage
const storage = getStorage();

// Add doc
function addUserData(user) {
  addDoc(userRef, {
    email: user.email,
    // password: user.password,
    displayName: "",
    photoURL: "",
  })
    .then(() => {
      console.log("User has been added");
    })
    .catch((error) => {
      console.log("ERROR", error.message);
    });
}

// Add avatar
async function updateUserData(photo, currentUser, setLoading, user) {
  const avatarRef = ref(storage, currentUser.uid + ".png");
  if (photo) {
    const snapshot = await uploadBytes(avatarRef, photo);
  }

  const photoURL = await getDownloadURL(avatarRef);
  const { displayName } = user;
  updateProfile(currentUser, { photoURL, displayName });
  console.log(currentUser);
  setLoading(false);
}

export { database, userRef, blogRef, addUserData, updateUserData };
