import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CollectionLink(props) {
  return (
    <Button>
      <i className="fa-regular fa-folder"></i>
      <Link to={`/home/${props.collectionId}`}>{props.collectionName}</Link>
    </Button>
  );
}

export default CollectionLink;
