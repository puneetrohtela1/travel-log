import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntries, updateLogEntries } from "./API";

const LogEntryForm = ({
  location,
  onClose,
  isUpdate = false,
  updateData = {},
  setUpdate = () => {},
  setUpdateData = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (isUpdate) {
        data.latitude = location.latitude;
        data.longitude = location.longitude;
        await updateLogEntries(updateData?._id, data);
        setUpdate(false);
        setUpdateData();
      } else {
        data.latitude = location.latitude;
        data.longitude = location.longitude;
        const created = await createLogEntries(data);
        console.log(created);
      }
      onClose();
    } catch (err) {
      setError(err);
      console.error(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isUpdate) {
      console.log(new Date(updateData?.visitDate).getFullYear());
      setValue("title", updateData?.title);
      setValue("comments", updateData?.comments);
      setValue("description", updateData?.description);
      setValue("image", updateData?.image);
      setValue("visitDate", updateData?.visitDate?.slice(0, 10));
    }
  }, [isUpdate, updateData]);

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
      <button disable={loading.toString()}>
        {loading ? "Loading..." : isUpdate ? "Update Entry" : "Create Entry"}
      </button>
    </form>
  );
};

export default LogEntryForm;
