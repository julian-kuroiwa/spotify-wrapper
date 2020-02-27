export default function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}?market=ES`),
    getAlbums: ids => this.request(`${this.apiURL}/albums/?ids=${ids}`),
    getTracks: id => this.request(`${this.apiURL}/albums/${id}/tracks?market=ES`),
  }
}
