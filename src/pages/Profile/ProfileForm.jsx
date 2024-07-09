// src/components/ProfileForm.js
import React, { useState } from 'react';
import { createUserProfile } from './ProfileApi';

const ProfileForm = ({ user, setUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);
  const [imagePreview, setImagePreview] = useState(user.profileImage);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      profileImage: file,
    });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    try {
      const response = await createUserProfile(formData);
      setUser(formData);
      alert(response.message);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // Hide the notification after 5 seconds
    } catch (error) {
      console.log('error while updating profile', error);
    }
    console.log('Saved data:', formData);
    setEditMode(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">Profile</h2>
      {editMode ? (
        <div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="mt-4 h-24 w-24 rounded-full object-cover"
              />
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover"
              />
            )}
          </div>
          <p className="mb-4 text-lg"><strong>Name:</strong> {user.name}</p>
          <p className="mb-4 text-lg"><strong>Email:</strong> {user.email}</p>
          <p className="mb-4 text-lg"><strong>Phone:</strong> {user.phone}</p>
          <p className="mb-4 text-lg"><strong>Address:</strong> {user.address}</p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit
          </button>
        </div>
      )}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          Profile Update Successful! Your profile has been updated successfully. Thank you for keeping your information up-to-date.
        </div>
      )}
    </div>
  );
};

export default ProfileForm;