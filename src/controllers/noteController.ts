import { NoteModel } from "../repository/models/noteModel";

export const getAllNotes = async (req: any, res: any) => {
  const notes = await NoteModel.find({});
  if (notes) {
    res.status(200).json(notes);
  } else {
    res.status(400);
    throw new Error("cannot find notes");
  }
};

export const addNewNote = async (req: any, res: any) => {
  const { id, content } = req.body;
  const note = await NoteModel.create({ id, content });

  if (note) {
    res.status(201).json(note);
  } else {
    res.status(300).json({ message: "Failed to add note" });
  }
};

export const getSpecificNote = async (req: any, res: any) => {
  const id = req.params.id;
  const note = await NoteModel.findOne({ id });

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(300).json({ message: "Cannot find note." });
  }
};
