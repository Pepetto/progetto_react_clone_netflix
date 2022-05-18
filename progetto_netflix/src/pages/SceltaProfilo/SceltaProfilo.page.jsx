import Profilo from "../../components/Profilo/Profilo.component";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function SceltaProfilo() {
  const [profili, setProfili] = useState([]);
  const [newProfilo, setNewProfilo] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const aggiungiElemento = () => {
    const array = [...profili];
    array.push(newProfilo);
    setProfili({ profili: array });
    console.log(newProfilo);
  };

  // rimuoviElemento =()=> {
  //     console.log("deleted")

  //     const myVect = [...this.state.cart]
  //     myVect.pop()

  //     this.setState({cart : myVect})
  // }
  console.log(newProfilo);

  const onChangeText = (event) => {
    setNewProfilo({ name: event.target.value });
    console.log(event.target.value);
  };
  console.log(newProfilo);

  const arrayProfili = [
    {
      name: "pedro",
    },
    {
      name: "ugo",
    },
    {
      name: "gino",
    },
  ];

  return (
    <>
      {profili.map((props) => (
        <Profilo name={props.name} />
      ))}
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Aggiungi nuovo utente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-50">
            <div className="mb-3">
              <label className="form-label ">Usurname</label>
              <input type="text" className="form-control text-dark" onChange={onChangeText}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={aggiungiElemento}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SceltaProfilo;
