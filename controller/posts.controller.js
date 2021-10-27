class PostController{
    async createPost(req, res){
        const {title, content, userId} = req.body;
        const newPost = await db.query('INSERT INTO post (title, content, userid) values ($1, $2) RETURNING *',
         [title, content, userId]);
        res.json(newPost.rows[0]);

    }
    async getPostsByUser(req, res){
        const id = req.query.id;
        const posts = await db.query('SELECT FROM * WHERE user_id = $1',[id]);
        res.json(posts.rows);
        
    }
}

module.exports = new PostController();