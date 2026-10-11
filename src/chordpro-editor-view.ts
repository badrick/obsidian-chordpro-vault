import { TextFileView, WorkspaceLeaf } from 'obsidian';
import { VIEW_TYPE_CHORDPRO, VIEW_TYPE_CHORDPRO_EDITOR } from './view-types';

export class ChordProEditorView extends TextFileView {
	private editorEl: HTMLTextAreaElement | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
		this.icon = 'code';
	}

	getViewType(): string {
		return VIEW_TYPE_CHORDPRO_EDITOR;
	}

	getDisplayText(): string {
		return this.file?.basename ?? 'ChordPro source';
	}

	onload(): void {
		super.onload();
		this.addAction('book-open', 'Show preview', () => {
			if (this.file) {
				void this.leaf.setViewState({
					type: VIEW_TYPE_CHORDPRO,
					state: { file: this.file.path },
				});
			}
		});
		this.contentEl.addClass('chordpro-editor-container');
		this.editorEl = this.contentEl.createEl('textarea', {
			cls: 'chordpro-editor-content',
			attr: { spellcheck: 'false' },
		});
		this.registerDomEvent(this.editorEl, 'input', () => this.requestSave());
	}

	getViewData(): string {
		return this.editorEl?.value ?? '';
	}

	setViewData(data: string): void {
		if (this.editorEl) {
			this.editorEl.value = data;
		}
	}

	clear(): void {
		if (this.editorEl) {
			this.editorEl.value = '';
		}
	}
}