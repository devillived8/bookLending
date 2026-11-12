import vkIcon from '../../assets/img/vk-icon.svg?react';
import tgIcon from '../../assets/img/tg-icon.svg?react';

export const Footer = () => {

  const VkIcon = vkIcon;
  const TgIcon = tgIcon;

  return (
    <footer className="flex justify-end bg-black/40 p-4">
      <ul className='flex gap-2'>
        <li>
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-red transition-colors"
          >
            <VkIcon className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-red transition-colors"
          >
            <TgIcon className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
