import React from "react";

const State = {
    image: "kairo.jpg",
    id: 0,
    next_image: "citypanama.jpg",
    previous_image: "",
    name: "Kairo"
};

const listeners = new Set();

function updateComponents() {
    for (const cb of listeners.values()) {
        cb();
    }
}

export function imageView(id) {
    let images = [
        { image: "kairo.jpg", id: 1, name: "Kairo" },
        { image: "citypanama.jpg", id: 2, name: "City of Panama" },
        { image: "citybarcelona.jpg", id: 3, name: "Barcelona" },
        { image: "citymoscow.jpg", id: 4, name: "Moscow" },
        { image: "cityvilnious.jpg", id: 5, name: "Vilnious" },
        { image: "cityprague.jpg", id: 6, name: "Prague" }

    ];

    if (id === 1) {
        console.log(id);
        State.image = images[0].image;
        State.id = images[0].id;
        State.next_image = images[1].image
        State.previous_image = "",
            State.name = images[0].name;
        updateComponents();
    }
    if (id === 2) {
        console.log(id);
        State.image = images[1].image;
        State.id = images[1].id;
        State.next_image = images[2].image
        State.previous_image = images[0].image
        State.name = images[1].name;
        updateComponents();
    }
    if (id === 3) {
        console.log(id);
        State.image = images[2].image;
        State.id = images[2].image;
        State.next_image = images[3].image
        State.previous_image = images[1].image
        State.name = images[2].name;
        updateComponents();
    }
    if (id === 4) {
        console.log(id);
        State.image = images[3].image;
        State.id = images[3].image;
        State.next_image = images[4].image
        State.previous_image = images[2].image
        State.name = images[3].name;
        updateComponents();
    }
    if (id === 5) {
        console.log(id);
        State.image = images[4].image;
        State.id = images[4].image;
        State.next_image = images[5].image
        State.previous_image = images[3].image
        State.name = images[4].name;
        updateComponents();
    }
    if (id === 6) {
        console.log(id);
        State.image = images[5].image;
        State.id = images[5].image;
        State.next_image = "";
        State.previous_image = images[4].image
        State.name = images[5].name;
        updateComponents();
    }
}


export function connect(Component) {
    return class Wrapper extends React.Component {
        state = {
            image: State.image,
            id: State.id,
            next_image: State.next_image,
            previous_image: State.previous_image,
            name: State.name
        };

        _listener = () => {
            this.setState({
                image: State.image,
                id: State.id,
                next_image: State.next_image,
                previous_image: State.previous_image,
                name: State.name
            });
        };

        componentDidMount() {
            listeners.add(this._listener);
        }

        render() {
            return (
                <Component {...this.props} name={this.state.name} previous_image={this.state.previous_image} next_image={this.state.next_image} image={this.state.image} id={this.state.id} />
            );
        }
    };
}