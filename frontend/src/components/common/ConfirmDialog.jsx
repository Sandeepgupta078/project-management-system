import Modal from "./Modal";

const ConfirmDialog = ({
  isOpen,
  title = "Confirm Action",
  description = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onCancel}
      width="max-w-md"
    >
      <p className="text-slate-500">
        {description}
      </p>

      <div className="mt-8 flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium text-slate-600 transition hover:bg-slate-50"
        >
          {cancelText}
        </button>

        <button
          disabled={loading}
          onClick={onConfirm}
          className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
        >
          {loading
            ? "Please wait..."
            : confirmText}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;