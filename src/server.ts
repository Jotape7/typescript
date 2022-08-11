// import { Schema, model, connect } from 'mongoose';

// import { HydratedDocument } from 'mongoose';



// // 1. Create an interface representing a document in MongoDB.
// interface IUser {
//   name: string;
//   email: string;
//   avatar?: string;
// }

// // 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: String
// });

// // 3. Create a Model.
// const User = model<IUser>('User', userSchema);

// // const user: HydratedDocument<IUser> = new User({
// //     name: 'Bill',
// //     email: 'bill@initech.com',
// //     avatar: 'https://i.imgur.com/dM7Thhn.png'
// //   });

// run().catch(err => console.log(err));

// async function run() {
//   // 4. Connect to MongoDB
//   await connect('mongodb://localhost:27017/test');

//   const user = new User({
//     name: 'Bill',
//     email: 'bill@initech.com',
//     avatar: 'https://i.imgur.com/dM7Thhn.png'
//   });
//   await user.save();

//   console.log(user.email); // 'bill@initech.com'
// }





// import { Types } from 'mongoose';

// // 1. Create an interface representing a document in MongoDB.
// interface IUser {
//     name: string;
//     email: string;
//     // Use `Types.ObjectId` in document interface...
//     organization: Types.ObjectId;
// }

// // 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     // And `Schema.Types.ObjectId` in the schema definition.
//     organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
// });




// Statics on typescript

// import { Model } from 'mongoose';


// interface IUser {
//     firstName: string;
//     lastName: string;
//   }
  
//   // Put all user instance methods in this interface:
//   interface IUserMethods {
//     fullName(): string;
//   }
  
//   // Create a new Model type that knows about IUserMethods...
//   type UserModel = Model<IUser, {}, IUserMethods>;
  
//   // And a schema that knows about IUserMethods
//   const schema = new Schema<IUser, UserModel, IUserMethods>({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true }
//   });
//   schema.method('fullName', function fullName() {
//     return this.firstName + ' ' + this.lastName;
//   });
  
//   const User = model<IUser, UserModel>('User', schema);
  
//   const user = new User({ firstName: 'Jean-Luc', lastName: 'Picard' });
//   const fullName: string = user.fullName(); // 'Jean-Luc Picard'

//   console.log(fullName);

// interface IUser {
//   name: string;
// }

// interface UserModel extends Model<IUser> {
//   myStaticMethod(): number;
// }

// const schema = new Schema<IUser, UserModel>({ name: String });
// schema.static('myStaticMethod', function myStaticMethod() {
//   return 42;
// });

// const User = model<IUser, UserModel>('User', schema);

// const answer: number = User.myStaticMethod(); // 42

// console.log(answer);


let helloworld = "Hello World"

console.log(helloworld);



interface User {
    name: string;
    id: number;
};

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1)


console.log(user.name)

interface Point {
    x: number;
    y: number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);