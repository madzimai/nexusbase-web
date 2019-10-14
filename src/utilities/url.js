export default function url(group, object) {
  if (group === 'workspace') {
    return '/w/' + object.id;
  }

  if (group === 'collection') {
    return '/c/' + object.id + '/table';
  }

  throw Error("url utility: unknown resolver");
}