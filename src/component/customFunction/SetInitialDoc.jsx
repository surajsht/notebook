import { setDoc, doc } from "firebase/firestore";
import { db } from "../../fireConfig/FireConfig";

export const setInitialDoc = (email) => {
  return setDoc(doc(db, "users", email), {
    allNotes: [],
    draftNotes: [],
    trashNotes: [],
  });
};
