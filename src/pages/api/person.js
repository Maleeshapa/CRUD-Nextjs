// pages/api/person.js

import mongoose from 'mongoose';
import connectDB from '@/backend/db';

connectDB();

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true }
});

const Person = mongoose.models.Person || mongoose.model('Person', personSchema);

export default async function handler(req, res) {
  await connectDB(); // Ensure MongoDB connection is established

  if (req.method === 'POST') {
    // Handle POST request to save a new person
    try {
      const { firstName, lastName, email, country } = req.body;
      const newPerson = new Person({ firstName, lastName, email, country });
      await newPerson.save();
      res.status(200).json({ message: 'Person saved successfully!' });
    } catch (error) {
      console.error('Error saving person:', error);
      res.status(500).json({ error: 'Failed to save person' });
    }
  } else if (req.method === 'GET') {
    if (req.query.id) {
      // Handle GET request to retrieve a specific person
      try {
        const person = await Person.findById(req.query.id);
        res.status(200).json(person);
      } catch (error) {
        console.error('Error fetching person:', error);
        res.status(500).json({ error: 'Failed to fetch person' });
      }
    } else {
      // Handle GET request to retrieve all persons
      try {
        const people = await Person.find();
        res.status(200).json(people);
      } catch (error) {
        console.error('Error fetching persons:', error);
        res.status(500).json({ error: 'Failed to fetch persons' });
      }
    }
  } else if (req.method === 'PUT') {
    // Handle PUT request to update a specific person
    try {
      const { _id, firstName, lastName, email, country } = req.body;
      if (!_id) {
        return res.status(400).json({ error: 'Person ID is required' });
      }
      const updatedPerson = await Person.findByIdAndUpdate(
        _id,
        { firstName, lastName, email, country },
        { new: true }
      );
      res.status(200).json(updatedPerson);
    } catch (error) {
      console.error('Error updating person:', error);
      res.status(500).json({ error: 'Failed to update person' });
    }
  } else if (req.method === 'DELETE') {
    // Handle DELETE request to remove a specific person
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'Person ID is required' });
      }
      await Person.findByIdAndDelete(id);
      res.status(200).json({ message: 'Person deleted successfully!' });
    } catch (error) {
      console.error('Error deleting person:', error);
      res.status(500).json({ error: 'Failed to delete person' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
