export const createUser = (email, password, userName) => {
  const createUserFirebase = firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    userCredential.user.updateProfile({ 
     displayName: userName,
    })
  }) 
  return createUserFirebase;
};

export const logOutUser = () => {
 return firebase.auth().signOut()
};

export const signInUser = (email, password) => {
 return firebase.auth().signInWithEmailAndPassword(email, password)
};

export const signInWithGoogle = () => {
 var provider = new firebase.auth.GoogleAuthProvider();
 return firebase.auth().signInWithPopup(provider)
};

export const savePost = (userName, postText) => {
  db.collection('posts').add({
    user: userName,
    userPost: postText,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    

  })
};

export const getPosts = (callback) => {
return db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(callback)
};

/* export const getPost = (idPost) => {
  return db.collection('posts').get(idPost)
}; */
