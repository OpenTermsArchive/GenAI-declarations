export function removeTrackingIDs(document) {
  document.querySelectorAll('a').forEach(link => {
    const params = new URLSearchParams(link.getAttribute('href'));

    params.delete('h');
    link.setAttribute('href', params.toString());
  });
}
