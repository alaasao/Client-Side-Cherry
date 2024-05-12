import React from "react";
import data from "../components/data";
import Main from "./component/Main";
import Desc from "./component/Desc";
import Doc from "./component/Doc";
import Form from "@/app/components/Form";
const page = ({ params }: { params: { pieceId: string } }) => {
  let piece = data.filter((e) => e.id === params.pieceId)[0];

  return (
    <div className="p-[4.5vw]">
      <Main {...piece} />
      <Desc desc={piece.desc} />
      <Doc doc={piece.doc} />
  <Form  name={piece.name} id={piece.id} type="piece" />
    </div>
  );
};

export default page;
