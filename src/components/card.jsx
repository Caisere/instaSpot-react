
import PostDetails from "./postdetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardGrid = ({posts, setPosts}) => {


  if (posts.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          No posts yet. Create your first post!
        </Typography>
      </Box>
    );
  }

  return (
    <main className="container mx-auto px-4 my-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostDetails
            key={post.image}
            post={post}
            onDelete={(postId) => {
              setPosts(posts.filter((p) => p.image !== postId));
            }}
          />
        ))}
      </ul>
    </main>
  );
};

export default CardGrid;
