import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
FolderLock,
Upload,
ShieldCheck,
FileText
} from "lucide-react";

import { uploadFile } from "../services/fileService";

export default function FileManagerPage() {
const [file, setFile] = useState<File | null>(null);

async function upload() {
if (!file) {
alert("Select a file first");
return;
}
try {
  const result = await uploadFile(file);
  alert(result.message);
} catch {
  alert("Upload failed");
}
}

return (
<div
style={{
display: "flex",
minHeight: "100vh",
background: "#020617",
color: "white"
}}
> <Sidebar />
  <div
    style={{
      flex: 1,
      padding: "30px"
    }}
  >
    <div
      style={{
        background:
          "linear-gradient(135deg,#0ea5e9,#2563eb)",
        padding: "30px",
        borderRadius: "20px",
        marginBottom: "30px"
      }}
    >
      <h1 style={{ margin: 0 }}>
        🔒 Secure File Vault
      </h1>

      <p
        style={{
          marginTop: "10px",
          color: "#dbeafe"
        }}
      >
        Military-grade AES-256 encrypted
        storage with threat monitoring.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "1.5fr 1fr",
        gap: "20px"
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "18px",
          border:
            "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <h2>
          <Upload size={20} /> Upload File
        </h2>

        <div
          style={{
            marginTop: "20px",
            border:
              "2px dashed #38bdf8",
            borderRadius: "16px",
            padding: "40px",
            textAlign: "center"
          }}
        >
          <FolderLock
            size={50}
          />

          <p>
            Select a file to encrypt
            and upload
          </p>

          <input
            type="file"
            onChange={(e) =>
              setFile(
                e.target
                  .files?.[0] ||
                  null
              )
            }
          />

          <br />

          <button
            onClick={upload}
            style={{
              marginTop: "20px",
              padding:
                "12px 25px",
              background:
                "#2563eb",
              color: "white",
              border: "none",
              borderRadius:
                "10px",
              cursor:
                "pointer"
            }}
          >
            Encrypt & Upload
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "18px",
          border:
            "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <h2>Vault Status</h2>

        <Status
          label="Encryption"
          value="ACTIVE"
        />

        <Status
          label="Threat Scan"
          value="ONLINE"
        />

        <Status
          label="Storage"
          value="PROTECTED"
        />
      </div>
    </div>

    <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "18px"
      }}
    >
      <h2>
        <FileText size={20} /> Protected
        Files
      </h2>

      <FileCard
        name="ResearchPaper.pdf"
      />

      <FileCard
        name="ProjectDocs.zip"
      />
    </div>
  </div>
</div>
);
}

function Status({
label,
value
}: {
label: string;
value: string;
}) {
return (
<div
style={{
marginTop: "15px",
padding: "12px",
background: "#0f172a",
borderRadius: "10px"
}}
> <strong>{label}</strong>
  <div
    style={{
      color: "#4ade80"
    }}
  >
    {value}
  </div>
</div>
);
}

function FileCard({
name
}: {
name: string;
}) {
return (
<div
style={{
marginTop: "15px",
background: "#0f172a",
padding: "15px",
borderRadius: "12px",
display: "flex",
justifyContent:
"space-between"
}}
> <span>{name}</span>
  <span
    style={{
      color: "#4ade80"
    }}
  >
    <ShieldCheck
      size={18}
    />{" "}
    Encrypted
  </span>
</div>
);
}
