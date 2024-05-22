function Feature({img, title ,description}) {
    return(
        <div className="feature-item">
          <img src={img} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p className="feature-item-description">{description}</p>
        </div>
    )
}

export default Feature