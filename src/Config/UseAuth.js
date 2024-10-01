import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import { ref } from "vue";

const user = ref(null);
const loading = ref(true);

export function useAuth() {
  const ready = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
      loading.value = false;
      resolve(currentUser);
    }, (error) => {
      loading.value = false; // Set loading to false even on error
      reject(error);
    });
  });

  return { user, loading, ready };
}
