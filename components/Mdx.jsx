import { useMDXComponent } from 'next-contentlayer/hooks';

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component />
    </article>
  );
}
