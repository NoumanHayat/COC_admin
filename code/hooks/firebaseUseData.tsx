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
export const Action = async () => {
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
  // await firestore()
  //   .collection('HomeFarming')
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(documentSnapshot => {
  //       dataSet.push(documentSnapshot.data());
  //     });
  //   });

  console.log(dataSet.length);
}
export const getData = async () => {
  console.log('Starting...');
  const dataSet = [{}];
  dataSet.pop();
  await firestore()
    .collection('Data2')
    .where('active','==',true)
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
// export const Action = async ()=>{
//   console.log('Starting...');
//   const dataSet = [{}];
//   dataSet.pop();
//   await firestore()
//     .collection('AllData')
//     // .where('baseType','==','home')
//     // .where('townHall','>',5)
//     .get()
//     .then(querySnapshot => {
//       querySnapshot.forEach((documentSnapshot,index) => {
//         dataSet.push(documentSnapshot.data());
//         // console.log(index);
//       });
//     });
//     var newData=dataSet.filter(e=>{
//       return !(e.townHall >5 && e.baseType === 'builder' )
//     });
//     console.log(newData.length);
    // newData.forEach(async (e,index) => {
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
    
// }
export const Actions = async () => {
  console.log('------------------------------------');
  // await firestore().collection('Data2').where('townHall', '==',7 ).where('baseType', '==', 'builder').get().then(
  //   async function (querySnapshot) {
  //     await querySnapshot.forEach(function (doc) {
  //       doc.ref.delete();
  //       console.log('delete');
  //     });
  //     console.log({ status: 'success', message: 'Post Deleted!' })
  //     return ({ status: 'success', message: 'Post Deleted!' });
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