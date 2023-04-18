import { useRef } from "react";

const Parrafos = () => {

    const textoRef = useRef(null)

    const handleTexto = () => {
        // textoRef.current.innerHTML = 'Hola mundo'
        textoRef.current.scrollIntoView()
    }

    return (
        <div className="container my-5">
            <button onClick={handleTexto}>Disparar ref</button>

            <div>
                <h3>Parrafo 1</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
                    dignissim ipsum. Morbi pharetra porta leo ac ornare. Etiam vitae
                    imperdiet elit. Mauris consequat nisl at facilisis porta. Etiam vitae
                    purus eu felis sodales vulputate. Quisque ultrices, est nec tempus
                    molestie, ligula ex posuere massa, id fringilla eros ex id nulla. Fusce
                    aliquet sit amet risus non hendrerit. Phasellus eget erat euismod,
                    luctus ligula non, euismod urna. Ut sodales est nec nisi lobortis, a
                    pretium turpis elementum. Ut erat neque, faucibus placerat placerat
                    tempus, porttitor a metus. Integer pharetra tellus quis molestie tempor.
                    Etiam porttitor quis lectus vitae elementum. Morbi odio tellus,
                    tincidunt sed placerat non, tincidunt ut est. Integer lobortis posuere
                    massa at vestibulum. Praesent ut est orci. Mauris purus nisl,
                    pellentesque feugiat ipsum eget, molestie bibendum ex. Pellentesque
                    laoreet porttitor augue a volutpat. Curabitur hendrerit porta est in
                    sodales. Duis iaculis magna magna, quis egestas lacus suscipit id. Fusce
                    auctor odio ex, vel consectetur est consectetur ut. Vestibulum
                    scelerisque urna quis rutrum dapibus. Morbi nisl lacus, faucibus eget
                    dignissim et, eleifend nec metus. Aliquam varius lacus eu nisi molestie,
                    non vulputate orci scelerisque. In aliquet orci vitae facilisis commodo.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Nunc condimentum lacus tortor, vitae posuere arcu
                    tincidunt ac. Maecenas a sagittis leo. Pellentesque molestie nulla et
                    tempus posuere. In porttitor ac nisl vel elementum. Etiam suscipit
                    pellentesque turpis, feugiat lobortis orci facilisis tincidunt.
                    Curabitur ligula lorem, varius ac tellus eget, blandit malesuada dui.
                    Maecenas consequat ultricies ipsum, congue ultricies est feugiat ac.
                    Pellentesque tortor leo, venenatis a maximus vitae, placerat a justo.
                    Fusce dapibus metus quis sem aliquet, a suscipit tellus pulvinar. Fusce
                    vel augue interdum, placerat quam vel, finibus sem. Curabitur euismod
                    euismod lorem, vel porttitor est rutrum at. Maecenas et condimentum
                    dolor. Pellentesque pellentesque rutrum tempor. Aenean ultrices faucibus
                    interdum. Donec sagittis justo ac bibendum suscipit. Nulla dignissim,
                    sem vel fringilla ornare, leo libero porta justo, id vehicula metus quam
                    vel eros. Cras non eros non urna malesuada rhoncus a ut libero. Duis
                    luctus neque dolor, eget accumsan ligula malesuada rutrum. Nunc tempus a
                    eros vitae pellentesque. Aenean aliquam tempus risus eu ullamcorper.
                    Aliquam erat volutpat. Quisque pretium luctus lectus eleifend euismod.
                    Proin laoreet finibus tellus, a viverra erat. Aliquam ante justo,
                    gravida a dolor mattis, scelerisque efficitur mauris. Donec non enim
                    mattis, scelerisque massa non, bibendum sem. Nulla imperdiet libero
                    imperdiet aliquam condimentum.
                </p>
                <hr />
            </div>
            <div>
                <h3>Parrafo 2</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
                    dignissim ipsum. Morbi pharetra porta leo ac ornare. Etiam vitae
                    imperdiet elit. Mauris consequat nisl at facilisis porta. Etiam vitae
                    purus eu felis sodales vulputate. Quisque ultrices, est nec tempus
                    molestie, ligula ex posuere massa, id fringilla eros ex id nulla. Fusce
                    aliquet sit amet risus non hendrerit. Phasellus eget erat euismod,
                    luctus ligula non, euismod urna. Ut sodales est nec nisi lobortis, a
                    pretium turpis elementum. Ut erat neque, faucibus placerat placerat
                    tempus, porttitor a metus. Integer pharetra tellus quis molestie tempor.
                    Etiam porttitor quis lectus vitae elementum. Morbi odio tellus,
                    tincidunt sed placerat non, tincidunt ut est. Integer lobortis posuere
                    massa at vestibulum. Praesent ut est orci. Mauris purus nisl,
                    pellentesque feugiat ipsum eget, molestie bibendum ex. Pellentesque
                    laoreet porttitor augue a volutpat. Curabitur hendrerit porta est in
                    sodales. Duis iaculis magna magna, quis egestas lacus suscipit id. Fusce
                    auctor odio ex, vel consectetur est consectetur ut. Vestibulum
                    scelerisque urna quis rutrum dapibus. Morbi nisl lacus, faucibus eget
                    dignissim et, eleifend nec metus. Aliquam varius lacus eu nisi molestie,
                    non vulputate orci scelerisque. In aliquet orci vitae facilisis commodo.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Nunc condimentum lacus tortor, vitae posuere arcu
                    tincidunt ac. Maecenas a sagittis leo. Pellentesque molestie nulla et
                    tempus posuere. In porttitor ac nisl vel elementum. Etiam suscipit
                    pellentesque turpis, feugiat lobortis orci facilisis tincidunt.
                    Curabitur ligula lorem, varius ac tellus eget, blandit malesuada dui.
                    Maecenas consequat ultricies ipsum, congue ultricies est feugiat ac.
                    Pellentesque tortor leo, venenatis a maximus vitae, placerat a justo.
                    Fusce dapibus metus quis sem aliquet, a suscipit tellus pulvinar. Fusce
                    vel augue interdum, placerat quam vel, finibus sem. Curabitur euismod
                    euismod lorem, vel porttitor est rutrum at. Maecenas et condimentum
                    dolor. Pellentesque pellentesque rutrum tempor. Aenean ultrices faucibus
                    interdum. Donec sagittis justo ac bibendum suscipit. Nulla dignissim,
                    sem vel fringilla ornare, leo libero porta justo, id vehicula metus quam
                    vel eros. Cras non eros non urna malesuada rhoncus a ut libero. Duis
                    luctus neque dolor, eget accumsan ligula malesuada rutrum. Nunc tempus a
                    eros vitae pellentesque. Aenean aliquam tempus risus eu ullamcorper.
                    Aliquam erat volutpat. Quisque pretium luctus lectus eleifend euismod.
                    Proin laoreet finibus tellus, a viverra erat. Aliquam ante justo,
                    gravida a dolor mattis, scelerisque efficitur mauris. Donec non enim
                    mattis, scelerisque massa non, bibendum sem. Nulla imperdiet libero
                    imperdiet aliquam condimentum.
                </p>
                <hr />
            </div>
            <div ref={textoRef}>
                <h3>Parrafo 3</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
                    dignissim ipsum. Morbi pharetra porta leo ac ornare. Etiam vitae
                    imperdiet elit. Mauris consequat nisl at facilisis porta. Etiam vitae
                    purus eu felis sodales vulputate. Quisque ultrices, est nec tempus
                    molestie, ligula ex posuere massa, id fringilla eros ex id nulla. Fusce
                    aliquet sit amet risus non hendrerit. Phasellus eget erat euismod,
                    luctus ligula non, euismod urna. Ut sodales est nec nisi lobortis, a
                    pretium turpis elementum. Ut erat neque, faucibus placerat placerat
                    tempus, porttitor a metus. Integer pharetra tellus quis molestie tempor.
                    Etiam porttitor quis lectus vitae elementum. Morbi odio tellus,
                    tincidunt sed placerat non, tincidunt ut est. Integer lobortis posuere
                    massa at vestibulum. Praesent ut est orci. Mauris purus nisl,
                    pellentesque feugiat ipsum eget, molestie bibendum ex. Pellentesque
                    laoreet porttitor augue a volutpat. Curabitur hendrerit porta est in
                    sodales. Duis iaculis magna magna, quis egestas lacus suscipit id. Fusce
                    auctor odio ex, vel consectetur est consectetur ut. Vestibulum
                    scelerisque urna quis rutrum dapibus. Morbi nisl lacus, faucibus eget
                    dignissim et, eleifend nec metus. Aliquam varius lacus eu nisi molestie,
                    non vulputate orci scelerisque. In aliquet orci vitae facilisis commodo.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Nunc condimentum lacus tortor, vitae posuere arcu
                    tincidunt ac. Maecenas a sagittis leo. Pellentesque molestie nulla et
                    tempus posuere. In porttitor ac nisl vel elementum. Etiam suscipit
                    pellentesque turpis, feugiat lobortis orci facilisis tincidunt.
                    Curabitur ligula lorem, varius ac tellus eget, blandit malesuada dui.
                    Maecenas consequat ultricies ipsum, congue ultricies est feugiat ac.
                    Pellentesque tortor leo, venenatis a maximus vitae, placerat a justo.
                    Fusce dapibus metus quis sem aliquet, a suscipit tellus pulvinar. Fusce
                    vel augue interdum, placerat quam vel, finibus sem. Curabitur euismod
                    euismod lorem, vel porttitor est rutrum at. Maecenas et condimentum
                    dolor. Pellentesque pellentesque rutrum tempor. Aenean ultrices faucibus
                    interdum. Donec sagittis justo ac bibendum suscipit. Nulla dignissim,
                    sem vel fringilla ornare, leo libero porta justo, id vehicula metus quam
                    vel eros. Cras non eros non urna malesuada rhoncus a ut libero. Duis
                    luctus neque dolor, eget accumsan ligula malesuada rutrum. Nunc tempus a
                    eros vitae pellentesque. Aenean aliquam tempus risus eu ullamcorper.
                    Aliquam erat volutpat. Quisque pretium luctus lectus eleifend euismod.
                    Proin laoreet finibus tellus, a viverra erat. Aliquam ante justo,
                    gravida a dolor mattis, scelerisque efficitur mauris. Donec non enim
                    mattis, scelerisque massa non, bibendum sem. Nulla imperdiet libero
                    imperdiet aliquam condimentum.
                </p>
                <hr />
            </div>
            <div>
                <h3>Parrafo 4</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
                    dignissim ipsum. Morbi pharetra porta leo ac ornare. Etiam vitae
                    imperdiet elit. Mauris consequat nisl at facilisis porta. Etiam vitae
                    purus eu felis sodales vulputate. Quisque ultrices, est nec tempus
                    molestie, ligula ex posuere massa, id fringilla eros ex id nulla. Fusce
                    aliquet sit amet risus non hendrerit. Phasellus eget erat euismod,
                    luctus ligula non, euismod urna. Ut sodales est nec nisi lobortis, a
                    pretium turpis elementum. Ut erat neque, faucibus placerat placerat
                    tempus, porttitor a metus. Integer pharetra tellus quis molestie tempor.
                    Etiam porttitor quis lectus vitae elementum. Morbi odio tellus,
                    tincidunt sed placerat non, tincidunt ut est. Integer lobortis posuere
                    massa at vestibulum. Praesent ut est orci. Mauris purus nisl,
                    pellentesque feugiat ipsum eget, molestie bibendum ex. Pellentesque
                    laoreet porttitor augue a volutpat. Curabitur hendrerit porta est in
                    sodales. Duis iaculis magna magna, quis egestas lacus suscipit id. Fusce
                    auctor odio ex, vel consectetur est consectetur ut. Vestibulum
                    scelerisque urna quis rutrum dapibus. Morbi nisl lacus, faucibus eget
                    dignissim et, eleifend nec metus. Aliquam varius lacus eu nisi molestie,
                    non vulputate orci scelerisque. In aliquet orci vitae facilisis commodo.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Nunc condimentum lacus tortor, vitae posuere arcu
                    tincidunt ac. Maecenas a sagittis leo. Pellentesque molestie nulla et
                    tempus posuere. In porttitor ac nisl vel elementum. Etiam suscipit
                    pellentesque turpis, feugiat lobortis orci facilisis tincidunt.
                    Curabitur ligula lorem, varius ac tellus eget, blandit malesuada dui.
                    Maecenas consequat ultricies ipsum, congue ultricies est feugiat ac.
                    Pellentesque tortor leo, venenatis a maximus vitae, placerat a justo.
                    Fusce dapibus metus quis sem aliquet, a suscipit tellus pulvinar. Fusce
                    vel augue interdum, placerat quam vel, finibus sem. Curabitur euismod
                    euismod lorem, vel porttitor est rutrum at. Maecenas et condimentum
                    dolor. Pellentesque pellentesque rutrum tempor. Aenean ultrices faucibus
                    interdum. Donec sagittis justo ac bibendum suscipit. Nulla dignissim,
                    sem vel fringilla ornare, leo libero porta justo, id vehicula metus quam
                    vel eros. Cras non eros non urna malesuada rhoncus a ut libero. Duis
                    luctus neque dolor, eget accumsan ligula malesuada rutrum. Nunc tempus a
                    eros vitae pellentesque. Aenean aliquam tempus risus eu ullamcorper.
                    Aliquam erat volutpat. Quisque pretium luctus lectus eleifend euismod.
                    Proin laoreet finibus tellus, a viverra erat. Aliquam ante justo,
                    gravida a dolor mattis, scelerisque efficitur mauris. Donec non enim
                    mattis, scelerisque massa non, bibendum sem. Nulla imperdiet libero
                    imperdiet aliquam condimentum.
                </p>
                <hr />
            </div>
        </div>
    );
};

export default Parrafos;
