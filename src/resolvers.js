import { Note } from "./Models/Note";

export const resolvers = {
  Query: {
    hello: () => "hi",
    getNotes: () => Note.find({}),
    getNote: (_, { message }) => Note.find({ message }),
  },
  Mutation: {
    createNote: async (_, { title, author, message, createAt }) => {
      let dateNow = new Date();
      const Note2 = new Note({
        title,
        author,
        message,
        createdAt: dateNow,
      });

      await Note2.save();
      return Note2;
    },

    updateNote: {
      resolve(parent, args) {
        return Note.findByIdAndUpdate(args.id, {
          $set: {
            message: args.message,
            title: args.title,
            author: args.author,
          },
        }).exec();
      },
    },

    deleteNote: {
      resolve(parent, args) {
        console.log(args);
        return Note.findByIdAndDelete(args.id);
      },
    },

    deleteALLNote: {
      resolve(parent, args) {
        return Note.deleteMany();
      },
    },
  },
};
