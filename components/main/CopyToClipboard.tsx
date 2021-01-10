import { copyToClipboard } from '../../utils/client'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

export default function CopyToClipboard({ classes }: { classes: string }) {
  return (
    <div>
      <button
        aria-label="Copy to Clipboard"
        onClick={() => copyToClipboard(classes)}
      >
        <HiOutlineClipboardCopy className="w-5 h-5" />
      </button>
    </div>
  )
}
