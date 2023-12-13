let heading = React.createElement('div', null, 
    React.createElement('h1', null, "First day of basic React project")
);

//* 1st paragraph 
let para1 = React.createElement('div', null,
    React.createElement('p', null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sed incidunt blanditiis eum animi, nulla sit debitis, rem dolorum tenetur est labore dignissimos unde adipisci quaerat ratione sunt tempora architecto?")
);

//* 2nd paragraph 
let para2 = React.createElement('div', null, 
    React.createElement('p', null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatem suscipit a blanditiis sunt commodi porro? Sunt architecto  illum? ${React.createElement('a', null, "quia molestiae suscipit praesentium")} Cum eaque vero asperiores incidunt, accusantium repellat, ea veritatis assumenda dolores minus, quis nam! Officiis delectus soluta, ipsum quam pariatur dignissimos quo laboriosam incidunt, saepe alias sapiente?`)
);

//* 3rd paragraph
let para3 = React.createElement('div', null,
    React.createElement('p', null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro eaque amet iste sed quidem fuga aliquid, cum magnam molestiae, vel sit maiores itaque sapiente distinctio voluptatum? Explicabo iusto cumque distinctio natus labore velit, optio, at eaque repellat voluptas sed non nesciunt suscipit accusamus dolore totam, excepturi adipisci eligendi fugiat doloremque sint. Alias nisi repellendus fugiat obcaecati voluptas suscipit tempore quae facere pariatur error itaque cupiditate unde dolore iure, fugit sint, commodi nemo minima qui voluptates delectus dicta, quia earum culpa. Molestiae iusto, velit dolorem atque quae ipsam laboriosam nostrum incidunt ratione maxime dignissimos nemo eius dolores? Eum, eos nam.")
);

//* append all
ReactDOM.render([heading, para1, para2, para3], document.getElementById('root'));