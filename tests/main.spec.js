/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai'
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main'

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    // search (genérico) - busca por mais de 1 tipo
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists

    it('should exist the search method', () => {
      expect(search).to.exist
    })

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist
    })

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist
    })

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist
    })

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist
    })
  })
})
