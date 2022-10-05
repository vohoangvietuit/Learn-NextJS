import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostDetailsPageProps {
}

export default function PostDetailsPage (props: IPostDetailsPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Post Details page</h1>

      <h2>Query: {JSON.stringify(router.query)}</h2>
      <h2>PostId: {router.query?.postId}</h2>
    </div>
  );
}
