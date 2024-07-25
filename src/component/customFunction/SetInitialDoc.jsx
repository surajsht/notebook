import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../fireConfig/FireConfig";
import { auth } from "../../fireConfig/FireConfig";

export const setInitialDoc = async (email) => {
  const docRef = doc(db, "users", auth.currentUser.email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return setDoc(doc(db, "users", email), {
      allNotes: [],
      draftNotes: [],
      trashNotes: [],
    });
  }
};
