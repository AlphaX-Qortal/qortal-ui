import nacl from '../../deps/nacl-fast.js'
import utils from '../../deps/utils.js'
import Base58 from '../../deps/Base58.js'

const signArbitraryWithFee = (arbitraryBytesBase58, arbitraryBytesForSigningBase58, keyPair) => {

	if (!arbitraryBytesBase58) {
		throw new Error('ArbitraryBytesBase58 not defined')
	}


	if (!keyPair) {
		throw new Error('keyPair not defined')
	}

	const arbitraryBytes = Base58.decode(arbitraryBytesBase58)
	const _arbitraryBytesBuffer = Object.keys(arbitraryBytes).map(function (key) { return arbitraryBytes[key]; })
	const arbitraryBytesBuffer = new Uint8Array(_arbitraryBytesBuffer)

	const arbitraryBytesForSigning = Base58.decode(arbitraryBytesForSigningBase58)
	const _arbitraryBytesForSigningBuffer = Object.keys(arbitraryBytesForSigning).map(function (key) { return arbitraryBytesForSigning[key]; })
	const arbitraryBytesForSigningBuffer = new Uint8Array(_arbitraryBytesForSigningBuffer)

	

	const signature = nacl.sign.detached(arbitraryBytesForSigningBuffer, keyPair.privateKey)

	const signedBytes = utils.appendBuffer(arbitraryBytesBuffer, signature)

	return signedBytes
}

export default signArbitraryWithFee
