import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntries } from './API';

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntries(data);
      console.log(created);
      onClose();
    } catch (err) {
      setError(err);
      console.error(err);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error && <h3 className="error">{error}</h3>}
      <label htmlFor="title">Title</label>
      <input name="title" ref={register} />
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={2} ref={register} />
      <label htmlFor="description">description</label>
      <textarea name="description" rows={2} ref={register} />
      <label htmlFor="image">Image</label>
      <input name="image" ref={register} />
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" ref={register} />
      <button disable={loading}>
        {loading ? 'Loading...' : 'Create Entry'}
      </button>
    </form>
  );
};

export default LogEntryForm;
