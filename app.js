import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';
import jokeRoutes from './routes/jokeRoutes';
import db from './models';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/blagues', jokeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

const { Joke } = require('./models');

// Exemple : créer une blague si aucune entrée
(async () => {
    const count = await Joke.count();
    if (count === 0) {
        await Joke.bulkCreate([
            { content: "Pourquoi les poissons détestent l'ordinateur ? À cause d'Internet Explorer." },
            { content: "Quel est le comble pour un électricien ? De ne pas être au courant." },
            { content: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau." },
            { content: "Pourquoi les fantômes sont-ils de si mauvais menteurs ? Parce qu'on peut lire à travers eux." },
            { content: "Pourquoi les squelettes ne se battent-ils jamais entre eux ? Ils n'ont pas les tripes." },
            { content: "Pourquoi les mathématiciens détestent-ils la forêt ? Parce qu'il y a trop de racines." },
            { content: "Pourquoi les vampires n'ont-ils jamais de problèmes de dentiste ? Parce they always have a fang-tastic smile." },
            { content: "Pourquoi les canards sont-ils toujours à l'heure ? Parce qu'ils ont toujours un canard d'avance." },
            { content: "Pourquoi les abeilles ont-elles toujours le nez qui coule ? Parce   qu'elles ont le pollen." },
            { content: "Pourquoi les poules traversent-elles la route ? Pour aller de l 'autre côté." },
            { content: "Pourquoi les éléphants ne peuvent-ils pas utiliser l'ordinateur ?   Parce qu'ils ont peur des souris." },
            { content: "Pourquoi les chats n'aiment-ils pas l'eau ? Parce qu'ils    sont des félins, pas des poissons." },
        ]);
        console.log("Blagues initiales insérées.");
    }
})();

export default app;