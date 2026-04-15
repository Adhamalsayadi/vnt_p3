"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";

function PasswordField({ label, name }: { label: string; name: string }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label className="block text-sm font-semibold text-[#344054] mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl outline-none focus:ring-2 focus:ring-primary/20 text-sm pr-12 transition-all"
          required
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#344054] transition-colors"
          tabIndex={-1}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

export default function MarketerChangePasswordPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Marketer" />
      <div className="flex-1 flex flex-col">
        <Header role="Marketer" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-[#667085] text-sm font-medium mb-8">
              <Link href="/marketer" className="hover:text-black transition-colors">
                Dashboard
              </Link>{" "}
              &gt; <span className="text-[#98A2B3]">Change Password</span>
            </div>

            <div className="bg-white rounded-[32px] shadow-sm border border-[#EAECF0] p-10">
              <div className="mb-8">
                <h1 className="text-2xl font-black text-[#1D1F24] lowercase tracking-tight">change password</h1>
                <p className="text-[#667085] text-sm mt-1">Update your password to keep your account secure.</p>
              </div>

              {success ? (
                <div className="bg-[#E9F8F1] border border-[#27B973]/20 rounded-2xl p-8 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#27B973] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#27B973]/20">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="font-black text-[#1D1F24] text-lg">Password updated!</p>
                  <p className="text-sm text-[#667085] mt-1">Your new password is now active.</p>
                  <button onClick={() => setSuccess(false)} className="mt-6 text-sm font-bold text-[#1D1F24] underline underline-offset-4">Go back</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <PasswordField label="Old Password" name="currentPassword" />
                  <PasswordField label="New Password" name="newPassword" />
                  <PasswordField label="Repeat Password" name="confirmPassword" />

                  <div className="pt-4 border-t border-[#F2F4F7]">
                    <button
                      type="submit"
                      className="w-full bg-[#121111] hover:bg-black text-white font-black py-4 rounded-2xl transition-all shadow-xl hover:shadow-black/10 active:scale-[0.98] uppercase tracking-widest text-sm"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
