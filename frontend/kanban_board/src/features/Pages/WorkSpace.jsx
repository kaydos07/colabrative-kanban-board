import NavBar from "../../components/NavBar/NavBar";
import { StickyNote } from "../Board/components/StickyNote";
import { Modal } from "../../components/Modal/Modal";

export default function Workspace() {
  return (
    <>
      <NavBar></NavBar>
      <StickyNote/>
    </>
  );
}
