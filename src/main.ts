import { Plugin } from 'obsidian';
import { ChordProView } from './chordpro-view';
import { ChordProEditorView } from './chordpro-editor-view';
import { VIEW_TYPE_CHORDPRO, VIEW_TYPE_CHORDPRO_EDITOR } from './view-types';

export default class ChordProVault extends Plugin {
	onload() {
		this.registerView(
			VIEW_TYPE_CHORDPRO,
			(leaf) => new ChordProView(leaf),
		);
		this.registerView(
			VIEW_TYPE_CHORDPRO_EDITOR,
			(leaf) => new ChordProEditorView(leaf),
		);
		this.registerExtensions(
			['chordpro', 'cho', 'crd', 'chopro', 'chord', 'pro'],
			VIEW_TYPE_CHORDPRO,
		);
	}
}
