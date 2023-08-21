const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const rules = auth.rewriter({
    users: 600,
    data: 664,
    banners: 664
})

server.db = router.db;
server.use(rules)
server.use(auth);
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
