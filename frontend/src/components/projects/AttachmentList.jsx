import { Paperclip } from "lucide-react";

const AttachmentList = ({ attachments = [] }) => {
  if (attachments.length === 0) {
    return <p className="text-slate-400">No attachments available.</p>;
  }

  return (
    <div className="space-y-3">
      {attachments.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <Paperclip size={18} />

            <span className="text-sm font-medium text-slate-700">{file}</span>
          </div>

          <a
            href={`http://localhost:4000/uploads/${file}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            View
          </a>
        </div>
      ))}
    </div>
  );
};

export default AttachmentList;
