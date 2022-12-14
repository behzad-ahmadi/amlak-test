import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import * as React from 'react';

const _defaultGetTextGenerator = (param, query) => null;
const _defaultGetDefaultTextGenerator = path => path;

// Pulled out the path part breakdown
// going to be used by both `asPath` and `pathname`
const generatePathParts = pathStr => {
  const pathWithoutQuery = pathStr.split('?')[0];
  return pathWithoutQuery.split('/').filter(v => v.length > 0);
};

export default function NextBreadcrumbs({
  getTextGenerator = _defaultGetTextGenerator,
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
}) {
  const router = useRouter();

  const breadcrumbs = React.useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      if (asPathNestedRoutes[0] === '#' || pathnameNestedRoutes[0] === '#')
        return [{ href: '/', text: 'Home' }];

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // Pull out and convert "[post_id]" into "post_id"
        const param = pathnameNestedRoutes[idx]
          .replace('[', '')
          .replace(']', '');

        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
        return {
          href,
          textGenerator: getTextGenerator(param, router.query),
          text: getDefaultTextGenerator(subpath, href),
        };
      });

      return [{ href: '/', text: 'Home' }, ...crumblist];
    },
    [
      router.asPath,
      router.pathname,
      router.query,
      getTextGenerator,
      getDefaultTextGenerator,
    ]
  );

  return (
    <Breadcrumb aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumb>
  );
}

function Crumb({ text: defaultText, textGenerator, href, last = false }) {
  const [text, setText] = React.useState(defaultText);

  useEffect(() => {
    const func = async () => {
      // If `textGenerator` is nonexistent, then don't do anything
      if (!Boolean(textGenerator)) {
        return;
      }
      // Run the text generator and set the text again
      const finalText = await textGenerator();
      setText(finalText);
    };

    func();
  }, [textGenerator]);

  if (last) {
    return <BreadcrumbItem active>{text}</BreadcrumbItem>;
  }

  return (
    <Link href={href} legacyBehavior passHref>
      <BreadcrumbItem>{text}</BreadcrumbItem>
    </Link>
  );
}
