export default function url(group, object) {
  if (group === 'collection') {
    return '/c/' + object.id + '/table';
  }

  if (group === 'label') {
    return '/l/' + object.id;
  }

  throw Error("url utility: unknown resolver");
}