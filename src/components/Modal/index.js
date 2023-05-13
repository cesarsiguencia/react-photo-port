function Modal({currentPhoto, toggleModal}) {
    const {name, category, description, i} = currentPhoto


    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${i}.jpg`)}alt="current category" />
                <p>
                    {description}
                </p>
                <button onClick={toggleModal} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal