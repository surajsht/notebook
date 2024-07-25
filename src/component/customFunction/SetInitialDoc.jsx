import { setDoc, doc } from "firebase/firestore";
import { db } from "../../fireConfig/FireConfig";
import { auth } from "../../fireConfig/FireConfig";

export const setInitialDoc = (email) => {
  if (!auth.currentUser.email) {
    return setDoc(doc(db, "users", email), {
      allNotes: [],
      draftNotes: [],
      trashNotes: [],
    });
  }
};
