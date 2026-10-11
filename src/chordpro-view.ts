import { FileView, TFile, WorkspaceLeaf } from 'obsidian';
import { VIEW_TYPE_CHORDPRO, VIEW_TYPE_CHORDPRO_EDITOR } from './view-types';

export class ChordProView extends FileView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
		this.icon = 'music';
	}

	getViewType(): string {
		return VIEW_TYPE_CHORDPRO;
	}

	getDisplayText(): string {
		return this.file?.basename ?? 'ChordPro';
	}

	onload(): void {
		super.onload();
		this.addAction('code', 'Edit source', () => {
			if (this.file) {
				void this.leaf.setViewState({
					type: VIEW_TYPE_CHORDPRO_EDITOR,
					state: { file: this.file.path },
				});
			}
		});
	}

	async onLoadFile(file: TFile): Promise<void> {
		await super.onLoadFile(file);
		const content = await this.app.vault.cachedRead(file);
		this.contentEl.empty();
		this.contentEl.createEl('pre', {
			cls: 'chordpro-view-content',
			text: content,
		});
	}
}