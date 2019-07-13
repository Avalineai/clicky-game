import React from "react";

const styles = {
    imgSize: {
        width: "300px",
        height: "200px",
    }
}

const contStyles = {
    container: {
        width: "320px",
        height: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px"
    }
}

const view = {
    viewCont: {
        float: "left"
    }
}

function ImageCard(props) {
    console.log(props.image.image);
    return (
        <div style={view.viewCont}>
        <div style={contStyles.container} className="card">
            <div style={styles.imgSize} className="img-container">
                <img onClick={() => props.handleClick(props.image.id)} style={styles.imgSize} alt={props.name} src={props.image.image} />
            </div>
        </div>
        </div>
    )
}
export default ImageCard