import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import LogEntryForm from "./LogEntryForm";
import { listLogEntries, deleteLogEntries } from "./API";
const App = () => {
  const [logEntries, setlogEntries] = useState([]);
  const [showPopup, setshowPopup] = useState({});
  const [addEntryLocation, setaddEntryLocation] = useState(null);
  const [isUpdate, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 28.6139,
    longitude: 77.209,
    zoom: 5,
  });

  const getEntries = useCallback(async () => {
    const logEntries = await listLogEntries();
    console.log(logEntries);
    setlogEntries(logEntries);
  }, []);

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerpopup = (event) => {
    // console.log(event);
    const [longitude, latitude] = event.lngLat;
    setaddEntryLocation({
      latitude,
      longitude,
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/yashsingh5445/ckl2m94cr1ktn17s65rhthn2v"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onDblClick={showAddMarkerpopup}
    >
      {logEntries.map((entry) => (
        <React.Fragment key={entry._id}>
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
          >
            <div
              onClick={() =>
                setshowPopup({
                  [entry._id]: true,
                })
              }
            >
              <img
                className="marker"
                src="https://i.imgur.com/y0G5YTX.png"
                alt="marker"
              />
            </div>
          </Marker>
          {showPopup[entry._id] ? (
            <Popup
              latitude={entry.latitude}
              longitude={entry.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setshowPopup({})}
              anchor="top"
              className="popup"
            >
              <h3>{entry.title}</h3>
              <p>{entry.comments}</p>
              <small>
                Visited on : {new Date(entry.visitDate).toLocaleDateString()}
              </small>
              {entry.image && <img src={entry.image} alt={entry.title} />}
              <button
                onClick={async () => {
                  // await deleteLogEntries(entry._id);
                  setshowPopup({});
                  setUpdateData({ ...entry });
                  const { longitude, latitude } = entry;
                  // setaddEntryLocation({
                  //   latitude,
                  //   longitude,
                  // });
                  setTimeout(() => {
                    setUpdate(true);
                  }, 100);
                  // getEntries();
                }}
              >
                Update
              </button>
              <button
                onClick={async () => {
                  await deleteLogEntries(entry._id);
                  setshowPopup({});
                  getEntries();
                }}
              >
                Delete
              </button>
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
      {isUpdate ? (
        <Popup
          latitude={updateData?.latitude}
          longitude={updateData?.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => {
            setUpdate(false);
            setUpdateData();
            setaddEntryLocation(null);
          }}
          anchor="top"
        >
          <div className="popup">
            <LogEntryForm
              isUpdate={isUpdate}
              updateData={updateData}
              onClose={() => {
                setUpdate(false);
                setUpdateData();
                setaddEntryLocation(null);
                getEntries();
              }}
              location={updateData}
            />
          </div>
        </Popup>
      ) : null}
      {addEntryLocation && (
        <>
          <Marker
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
          >
            <div>
              <img
                className="marker"
                src="https://i.imgur.com/y0G5YTX.png"
                alt="marker"
              />
            </div>
          </Marker>
          <Popup
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setaddEntryLocation(null)}
            anchor="top"
          >
            <div className="popup">
              <LogEntryForm
                isUpdate={isUpdate}
                updateData={updateData}
                setUpdate={setUpdate}
                setUpdateData={setUpdateData}
                onClose={() => {
                  setaddEntryLocation(null);
                  getEntries();
                }}
                location={addEntryLocation}
              />
            </div>
          </Popup>
        </>
      )}
    </ReactMapGL>
  );
};

export default App;
