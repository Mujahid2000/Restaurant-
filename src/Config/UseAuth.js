import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import { ref, watch } from "vue";

const user = ref(null);
const loading = ref(true);

export function useAuth() {
  const ready = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
      loading.value = false;
      resolve(currentUser);
    }, (error) => {
      loading.value = false; 
      reject(error);
    });
  });


  watch(user, (authenticatedUser, presentUser) => {
    if(authenticatedUser){
      console.log('user are changed ', authenticatedUser);
    }
    
  })
  return { user, loading, ready };
}
