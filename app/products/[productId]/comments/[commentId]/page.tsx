import React from "react";

async function ProductCommentById({ params } : { params: Promise<{ productId: string; commentId: string }> }) {
  const { productId, commentId } = await params;
                
  return (
    <div>
      Product of id: {productId} and comment of id: {commentId}
    </div>
  );
}

export default ProductCommentById;