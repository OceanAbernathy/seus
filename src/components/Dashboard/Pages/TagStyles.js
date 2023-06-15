export function getLevelBackgroundColor(type) {
  if (type === 'Beginner') {
    return 'green.300';
  }
  if (type === 'Intermediate') {
    return 'yellow.200';
  }
  return 'red.200';
}

export function getStyleBackgroundColor(type) {
  if (type === 'Blues') {
    return 'blue.300';
  }
  if (type === 'Classical') {
    return 'gray.300';
  }
  if (type === 'Metal') {
    return 'gray.500';
  }
  if (type === 'Folk') {
    return 'orange.400';
  }
  if (type === 'Jazz') {
    return 'cyan.400';
  }
  if (type === 'Bluegrass') {
    return 'green.300';
  }
  if (type === 'Rock') {
    return 'purple.300';
  }
  if (type === 'Country') {
    return 'orange.200';
  }
  if (type === 'Reggae') {
    return 'green.400';
  }
  if (type === 'Fusion') {
    return 'blue.200';
  }
  if (type === 'Funk') {
    return 'green.200';
  }
  if (type === 'Pop') {
    return 'pink.300';
  }
  return 'gray.300';
}
