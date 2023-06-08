/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import Th7NewBuilder from '../Data/Th7NewBuilder.json';

export const sendReport = async (photoUrl: string, link: string, issue: string,) => {
  let response;
  try {
    await firestore().collection('Report').add({
      photoUrl: photoUrl,
      link: link,
      issue: issue,
    }).then(function () {
      // console.log({ status: 'success', message: 'User Added Successfully!' })
    }).catch((Error) => {
      console.log({ status: 'fail', message: Error });
    })
  } catch (error) {
    return ({ status: 'fail', message: error })
  }
  return ({ status: 'success', message: 'success' });
}
export const Actions = async () => {
  console.log('Starting...');
  const dataSet = [{}];
  dataSet.pop();
  await firestore()
    .collection('AllData')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        dataSet.push(documentSnapshot.data());
      });
    });
  console.log(dataSet.length);
}
export const getData = async () => {
  console.log('Starting...');
  const dataSet = [{}];
  dataSet.pop();
  await firestore()
    .collection('Data2')
    .where('active', '==', true)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        dataSet.push(documentSnapshot.data());
      });
    });

  return (dataSet);
}
export const sendReview = async (photoUrl: string, link: string, review: string,) => {
  let response;
  try {
    await firestore().collection('Review').add({
      photoUrl: photoUrl,
      link: link,
      review: review,
    }).then(function () {
      // console.log({ status: 'success', message: 'User Added Successfully!' })
    }).catch((Error) => {
      console.log({ status: 'fail', message: Error });
    })
  } catch (error) {
    return ({ status: 'fail', message: error })
  }
  return ({ status: 'success', message: 'success' });
}

export const Action = async () => {
  console.log('------------------------------------');
  // await firestore().collection('Review').get().then(
  //   async function (querySnapshot) {
  //     await querySnapshot.forEach(function (doc) {
  //       doc.ref.delete();
  //       console.log(doc.ref._documentPath._parts);
  //     });
  //     console.log({ status: 'success', message: 'Post Deleted!' })
  //     return ({ status: 'success', message: 'Post Deleted!' });
  //   }
  // ).catch((err) => {
  //   console.log({ status: 'fail', message: err });
  // });
  // await firestore().collection('Review').doc('KefKZDkgtwXqtiU2YHfs').get().then(
  //   async function (querySnapshot) {
  //     console.log(querySnapshot);
  //   }
  // ).catch((err) => {
  //   console.log({ status: 'fail', message: err });
  // });
  // const url = await storage().ref('/Th10builder2').listAll();
  // url._items.forEach(async (e)=>{
  //   await e.getDownloadURL().then((es)=>{
  //     console.log(e.path)
  //     console.log(es)
  //   })
  // })
  // Th9NewBuilder.map(e=>{
  //   console.log(e)
  // })
  // Th7NewBuilder.forEach(async (e,index) => {
  //   try {
  //     await firestore().collection('Data2').add(e).then(function () {
  //        console.log({ status: 'success', message: 'User Added Successfully!'+index })
  //     }).catch((Error) => {
  //       console.log({ status: 'fail', message: Error });
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })
  // Th7NewBuilder.forEach(async (e,index) => {
  //   console.log(e);
  // });
  // await firestore().collection('Data2').where('baseType', '==', 'builder').where('townHall', '==', 10).get().then(
  //   async function (querySnapshot) {
  //     await querySnapshot.forEach(function (doc) {
  //       doc.ref.delete();
  //     });
  //     console.log ({ status: 'success', message: 'Post Deleted!' });
  //   }
  // ).catch((err) => {
  //   console.log({ status: 'fail', message: err });
  // });
}
export const getReport = async () => {
  let response = [{}];
  response.pop()
  await firestore().collection('Report').get().then(
    async function (querySnapshot) {
      querySnapshot.forEach((snapshot) => {
        response.push(snapshot);

      })
      // response = querySnapshot;
    }
  ).catch((err) => {
    console.log({ status: 'fail', message: err });
  });
  return response;
}
export const deleteItem = async (link, ref) => {
  await firestore().collection('AllData').where("link", '==', link).get().then(
    async function (querySnapshot) {
      await querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
      console.log('Delete item');
    }
  ).catch((err) => {
    return ({ status: 'fail', message: err });
  });

  await firestore().collection('Report').where("link", '==', link).get().then(
    async function (querySnapshot) {
      await querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
      // return ({ status: 'success', message: 'Deleted Successfully' });
    }
  ).catch((err) => {
    return ({ status: 'fail', message: err });
  });
  return ({ status: 'success', message: 'Deleted Successfully' });
}
export const IgnoreReport = async (ref) => {
  await firestore().collection('Report').doc(ref).get().then(
    async function (querySnapshot) {
      querySnapshot.ref.delete();
    }
  ).catch((err) => {
    return ({ status: 'fail', message: err });
  });
  return ({ status: 'success', message: 'Deleted Successfully' });
};
export const unactive = async (link) => {
  console.log('Working');
  try {
    await firestore().collection('Report').where("link", '==', link).get().then(
      async function (querySnapshot) {
        await querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
        // return ({ status: 'success', message: 'Deleted Successfully' });
      }
    ).catch((err) => {
      return ({ status: 'fail', message: err });
    });
     await firestore().collection('AllData').where("link", '==', link)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.update({ active: false })
        });
      })
      
  } catch (error) {
    console.log({ status: 'fail', message: error })
  }
  return ({ status: 'success', message: 'Base De Active Successfully ' })
};
export const getReview = async () => {
  let response = [{}];
  response.pop();
  await firestore().collection('Review').get().then(
    async function (querySnapshot) {
      querySnapshot.forEach((snapshot) => {
        response.push(snapshot);
      })
    }
  ).catch((err) => {
    console.log({ status: 'fail', message: err });
  });
  return response;
}